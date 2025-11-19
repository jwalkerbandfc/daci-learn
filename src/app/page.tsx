import { redirect } from 'next/navigation';

export default function Home() {
  const userIsLoggedIn = false; 
  if (!userIsLoggedIn) {
    redirect('https://canvas.instructure.com/courses/13420265');
  }
  return null;
}
