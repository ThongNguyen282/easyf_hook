import { useEffect, useState } from 'react';
import './App.scss';
// import ColorBox from './components/ColorBox/ColorBox';
// import TodoList from './components/Todo/TodoList';
// import TodoForm from './components/TodoForm/TodoForm';
import PostList from './components/PostList/PostList';
import Pagination from './components/Pagination/Pagination';
import queryString from 'query-string';
import PostFilterForm from './components/PostFiltersForm/PostFilterForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  const handleTodoList = (todo) => {
    const index = todoList.findIndex(x => x.id = todo.id);
    if (index < 0) {
      return;
    }
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }


  const handleTodoFormSubmit = (formValue) => {
    console.log("check", formValue);
    const newTodo = {
      id: todoList.length + 1,
      ...formValue
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo)
    setTodoList(newTodoList)

  }

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  })

  // b7
  const [postList, setPostList] = useState([]);
  useEffect(() => {

    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const resuesUsrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(resuesUsrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Faied to fetch post list");
      }

    }
    fetchPostList();
  }, [filters])


  //b8
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRow: 1,
  });



  const handlePageChange = (newPage) => {
    console.log(newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }


  const handleFiltersChange = (newFilters) => {
    console.log("check", newFilters.searchTerm);

    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    })
  }


  return (
    <div className="App">
      <PostFilterForm onSubmit={(newFilters) => { handleFiltersChange(newFilters) }} />
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={(formValue) => { handleTodoFormSubmit(formValue) }} />
      <TodoList todos={todoList} onTodoClick={handleTodoList} /> */}
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPaceChange={(newPage) => { handlePageChange(newPage) }} />
    </div>
  );
}

export default App;
