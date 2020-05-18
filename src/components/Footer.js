import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>보기 옵션: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>전체 보기</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>할 일</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>완료한 일</FilterLink>
  </div>
)

export default Footer