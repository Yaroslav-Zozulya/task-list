import { Button } from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/filters/constants';
import { selectFilterStatus } from '../../redux/filters/selectors';
import { setStatusFilter } from '../../redux/filters/filtersSlice';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilterStatus);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
