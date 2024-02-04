import Icon from '../Icon/index.js'
import { FilterBtn, FilterIcon } from './filters.styled.jsx'

const Filters = () => {
  return (
    <FilterBtn>
      <FilterIcon>
        <Icon name="filters" />
      </FilterIcon>
    </FilterBtn>
  )
}

export default Filters;