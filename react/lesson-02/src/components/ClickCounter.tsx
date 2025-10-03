/**
 * - Зберігає стан count
 * - Збільшує поточне значення count при onClick
 * - Рендериться у MainApp
 */

interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

export default function ClickCounter({ value, onUpdate }: ClickCounterProps) {
  return <button onClick={onUpdate}>Count: {value}</button>;
}
