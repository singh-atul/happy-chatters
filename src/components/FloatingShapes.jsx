/**
 * FloatingShapes - Playful decorative bubbles and shapes for kid-friendly sections
 * Gentle floating animation - calm, not overstimulating
 */
const shapes = [
  { size: 'w-4 h-4', color: 'bg-pastel-blue/60', top: 'top-[15%]', left: 'left-[10%]' },
  { size: 'w-6 h-6', color: 'bg-pastel-yellow/50', top: 'top-[25%]', left: 'right-[15%]' },
  { size: 'w-3 h-3', color: 'bg-pastel-green/60', top: 'top-[60%]', left: 'left-[5%]' },
  { size: 'w-5 h-5', color: 'bg-pastel-pink/50', top: 'top-[70%]', left: 'right-[8%]' },
  { size: 'w-4 h-4', color: 'bg-pastel-orange/40', top: 'top-[40%]', left: 'left-[20%]' },
  { size: 'w-3 h-3', color: 'bg-pastel-blue/40', top: 'top-[80%]', left: 'right-[25%]' },
];

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute ${shape.top} ${shape.left} ${shape.size} ${shape.color} rounded-full animate-float`}
          style={{ animationDuration: `${4 + i * 0.5}s`, animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </div>
  );
}
