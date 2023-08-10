import React from 'react';
import './Sort.scss';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Search } from '../Search/Search';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

type Props = {
  sortBy: string;
  limit: string;
  query?: string;
  changeSortBy: (sortValue: string) => void;
  changeLimit: (limitValue: string) => void;
  changeQuery: (query: string) => void;
};

export const Sort: React.FC<Props> = ({
  query,
  sortBy,
  limit,
  changeSortBy,
  changeLimit,
  changeQuery,
}) => {
  function handleSortByChange(event: SelectChangeEvent) {
    changeSortBy(event.target.value);
  }

  function handleLimitChange(event: SelectChangeEvent) {
    changeLimit(event.target.value);
  }

  return (
    <div className="filters">
      <div className="sort__filter">
        <div className="sort__field">
          <div className="sort__title">Sort by</div>
          <Select
            name="sort-by"
            value={sortBy}
            className="sort__select"
            onChange={handleSortByChange}
            IconComponent={KeyboardArrowDownRoundedIcon}
          >
            <MenuItem className="option" value="id">
              Default
            </MenuItem>
            <MenuItem className="option" value="new">
              By date
            </MenuItem>
            <MenuItem className="option" value="discount">
              By discount
            </MenuItem>
            <MenuItem className="option" value="price">
              By price
            </MenuItem>
          </Select>
        </div>

        <div className="sort__field ">
          <div className="sort__title">Items on page</div>
          <Select
            name="perPage"
            value={limit}
            className="sort__select sort__select--perPage"
            onChange={handleLimitChange}
            IconComponent={KeyboardArrowDownRoundedIcon}
          >
            <MenuItem className="option" value="16">
              16
            </MenuItem>
            <MenuItem className="option" value="24">
              24
            </MenuItem>
            <MenuItem className="option" value="32">
              32
            </MenuItem>
            <MenuItem className="option" value="64">
              64
            </MenuItem>
          </Select>
        </div>
      </div>
      <div className="search__filter">
        <div className="sort__title">Search products</div>
        <Search query={query} changeQuery={changeQuery} />
      </div>
    </div >
  );
};
