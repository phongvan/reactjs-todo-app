function ListTask({tasks,deleteTask}) {
  return (
    <>
      {tasks.map((item, key) => {
        return (
            <div
              key={`kein_${key}`}
              className="alert alert-danger mt-2 d-flex justify-content-between"
            >
              <span>{item} - {key}</span>
              <button
                className="flex-1 grow 1"
                onClick={() => deleteTask(item)}
              >
                X
              </button>
            </div>
           
        );
      })}
    </>
  );
}

export default ListTask;
