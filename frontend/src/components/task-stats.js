export default function TaskStats({ stats }) {
  return (
    <div className={`w-full h-16`}>
      <div className="flex flex-row justify-evenly items-center w-full">
        <div className="rounded-full bg-gray-100 w-14 h-14">
          TODO: {stats.todo}
        </div>
        <div className="rounded-full bg-blue-100 w-14 h-14">
          DOING: {stats.doing}
        </div>
        <div className="rounded-full bg-green-100 w-14 h-14">
          DONE: {stats.done}
        </div>
      </div>
    </div>
  );
}
