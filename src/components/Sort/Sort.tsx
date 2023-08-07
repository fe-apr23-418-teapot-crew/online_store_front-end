import React from 'react';
import './Sort.scss';

type Props = {
  sortBy: string,
  limit: string,
  changeSortBy: (sortValue: string) => void,
  changeLimit: (sortValue: string) => void,
}

export const Sort: React.FC<Props> = ({
  sortBy,
  limit,
  changeSortBy,
  changeLimit,
}) => {

  function handleSortByChange(event: React.ChangeEvent<HTMLSelectElement>) {
    changeSortBy(event.target.value);
  }

  function handleLimitChange(event: React.ChangeEvent<HTMLSelectElement>) {
    changeLimit(event.target.value);
  }

  return (
    <div className="sort__filter">
      <div className="sort__field">
        <div className="sort__title">Sort by</div>
        <select
          name="sort-by"
          value={sortBy}
          className="sort__select"
          onChange={handleSortByChange}
        >
          <option className='option' value="id">Default</option>
          <option className='option' value="new">By date</option>
          <option className='option' value="discount">By discount</option>
          <option className='option' value="price">By price</option>
        </select>
      </div>



      <div className="sort__field ">
        <div className="sort__title">Items on page</div>
        <select
          name="perPage"
          value={limit}
          className="sort__select sort__select--perPage"
          onChange={handleLimitChange}
        >
          <option className='option' value="8">8</option>
          <option className='option' value="16">16</option>
          <option className='option' value="32">32</option>
          <option className='option' value="64">64</option>
        </select>
      </div>
    </div>
  );
};