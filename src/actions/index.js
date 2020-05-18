let nextTodoId = 0
export const addTodo = text => ({ 
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

// 위와 같은 구문
// export function addTodo(text) {
//   return {
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
//   };
// }


export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}