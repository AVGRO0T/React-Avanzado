import { useEffect, useState } from 'react';

import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { defaultFilters, filterAdverts } from './filters';
import { advertsLoad } from '../../../store/actions';
import { connect, useSelector } from 'react-redux';
import { getAdvertsSelector, getUi } from '../../../store/selectors';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

export function AdvertsPage ({ onAdvertsLoaded, adverts}) {
  const [filters, setFilters] = useState(getFilters);
  const { isLoading } = useSelector(getUi)
 
  useEffect(() => {
    saveFilters(filters);
  }, [filters]);
  
  useEffect(() => {
    onAdvertsLoaded();
  },[]);
  
  const filteredAdverts = filterAdverts(adverts, filters);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <EmptyList advertsCount={adverts.length} />
      )}
    </>
  );
}
const mapStateToProps = (state, ownProps) => ({
  adverts: getAdvertsSelector(state),
});

const mapDispatchToProps = {
  onAdvertsLoaded: advertsLoad,
};

const connectedAdvertsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvertsPage);

export default connectedAdvertsPage;


