import { NextRequest, NextResponse } from 'next/server';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const RESOURCES_DIR = join(process.cwd(), 'public', 'resources');

function getFileType(filename: string): 'pdf' | 'docx' | 'pptx' | 'xlsx' | 'image' | 'code' | 'other' {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  
  const typeMap: Record<string, 'pdf' | 'docx' | 'pptx' | 'xlsx' | 'image' | 'code' | 'other'> = {
    'pdf': 'pdf',
    'docx': 'docx',
    'doc': 'docx',
    'pptx': 'pptx',
    'ppt': 'pptx',
    'xlsx': 'xlsx',
    'xls': 'xlsx',
    'png': 'image',
    'jpg': 'image',
    'jpeg': 'image',
    'gif': 'image',
    'webp': 'image',
    'svg': 'image',
    'ts': 'code',
    'tsx': 'code',
    'js': 'code',
    'jsx': 'code',
    'py': 'code',
    'java': 'code',
    'cpp': 'code',
    'c': 'code',
    'html': 'code',
    'css': 'code',
  };
  
  return typeMap[ext] || 'other';
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 10) / 10 + ' ' + sizes[i];
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export async function GET(request: NextRequest) {
  try {
    const files = readdirSync(RESOURCES_DIR)
      .filter(file => !file.startsWith('.'))
      .map(filename => {
        const filePath = join(RESOURCES_DIR, filename);
        const stats = statSync(filePath);
        
        return {
          name: filename,
          path: `/resources/${filename}`,
          type: getFileType(filename),
          size: formatFileSize(stats.size),
          updated: formatDate(new Date(stats.mtime)),
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json(files);
  } catch (error) {
    console.error('Error scanning resources folder:', error);
    return NextResponse.json(
      { error: 'Failed to scan resources folder' },
      { status: 500 }
    );
  }
}
