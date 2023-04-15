
import { useVirtualizer } from '@tanstack/react-virtual';

function App() {
    const parentRef = React.useRef()

    const rowVirtualizer = useVirtualizer({
      count: 10000,
      getScrollElement: () => parentRef.current,
      estimateSize: () => 35,
    })
  }
