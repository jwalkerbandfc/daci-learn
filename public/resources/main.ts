type FileItem = {
  name: string;
  path: string;
  type: 'pdf' | 'docx' | 'pptx' | 'xlsx' | 'image' | 'code' | 'other';
  size?: string;
  updated?: string;
};

const files: FileItem[] = [
  { name: "DACI Workbook", path: "./resources/DACI-Workbook.pdf", type: "pdf", size: "3.2 MB", updated: "2025-09-18" },
  { name: "Exercise 1 – Mobile Apps", path: "./resources/exercise-1.docx", type: "docx", size: "410 KB", updated: "2025-09-20" },
  { name: "Example Prompt Pack", path: "./resources/prompts.pptx", type: "pptx", size: "1.6 MB", updated: "2025-10-04" },
  { name: "Adult Learners Notes", path: "./resources/notes.xlsx", type: "xlsx", size: "245 KB", updated: "2025-10-10" },
  { name: "Training Banner", path: "./resources/banner.png", type: "image", size: "820 KB", updated: "2025-11-01" },
];

const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
const typeSelect = document.getElementById('typeSelect') as HTMLSelectElement | null;
const fileList = document.getElementById('fileList') as HTMLUListElement | null;

if (!searchInput || !typeSelect || !fileList) {
  throw new Error('Required DOM elements not found');
}

function iconFor(type: FileItem['type']): string {
  switch (type) {
    case 'pdf': return '📕';
    case 'docx': return '📝';
    case 'pptx': return '📊';
    case 'xlsx': return '📈';
    case 'image': return '🖼️';
    case 'code': return '💻';
    default: return '📁';
  }
}

function render(list: FileItem[]) {
  fileList.innerHTML = '';
  list.forEach(item => {
    const li = document.createElement('li');
    li.className = 'file-card';
    li.innerHTML = `
      <div class="icon" aria-hidden="true">${iconFor(item.type)}</div>
      <div class="file-meta">
        <h3 class="file-title">${item.name}</h3>
        <div class="file-sub">${item.updated ? `Updated ${item.updated}` : ''}</div>
        <div class="badges">
          <span class="badge type">${item.type.toUpperCase()}</span>
          ${item.size ? `<span class="badge size">${item.size}</span>` : ''}
        </div>
      </div>
      <div class="actions">
        <a class="button primary" href="${item.path}" target="_blank">Open</a>
        <a class="button secondary" href="${item.path}" download>Download</a>
      </div>
    `;
    fileList.appendChild(li);
  });
}

function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const t = typeSelect.value;
  const filtered = files.filter(f => {
    const matchText = f.name.toLowerCase().includes(q);
    const matchType = t ? f.type === t : true;
    return matchText && matchType;
  });
  render(filtered);
}

searchInput.addEventListener('input', applyFilters);
typeSelect.addEventListener('change', applyFilters);

render(files);
