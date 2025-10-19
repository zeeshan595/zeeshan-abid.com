import Link from '../components/link';

export default function () {
  return (
    <div className="flex-col">
      <img src="/images/not-found.webp" alt="not-found" />
      <span>
        Click <Link href="/">here</Link> to go back
      </span>
    </div>
  );
}
