/**
 * - Відображає текст з поточним значенням count
 * - Рендериться у App
 */

interface CountDisplayProps {
  value: number;
}

export default function CountDisplay({ value }: CountDisplayProps) {
  // Звідки взяти count?
  return <div>The current counter value is {value}</div>;
}
