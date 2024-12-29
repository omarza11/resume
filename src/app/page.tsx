import { ScrollArea } from '@/components/ui/scroll-area';
import { Home } from '@/components/sections/Home';
import { About } from '@/components/sections/About';

export default function Page() {
  return (
    <ScrollArea>
      <Home />
      <About />
    </ScrollArea>
  );
}
