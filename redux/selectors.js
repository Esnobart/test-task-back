import { createSelector } from 'reselect';

export const selectAdverts = state => state.adverts.items;

export const selectLoading = state => state.adverts.loading;

export const selectFilters = state => state.filters;

export const selectPage = state => state.adverts.page;

export const selectHasMore = state => state.adverts.hasMore;

export const selectFilteredAdverts = createSelector(
    [selectAdverts, selectFilters],
    (adverts, filters) => {
        let filtered = adverts;

        if (filters.airConditioner) {
            filtered = filtered.filter(advert => advert.details.airConditioner > 0);
        }
        if (filters.automatic) {
            filtered = filtered.filter(advert => advert.transmission === 'automatic');
        }
        if (filters.kitchen) {
            filtered = filtered.filter(advert => advert.details.kitchen > 0);
        }
        if (filters.tv) {
            filtered = filtered.filter(advert => advert.details.TV > 0);
        }
        if (filters.showerBathroom) {
            filtered = filtered.filter(advert => advert.details.shower > 0 && advert.details.bathroom > 0);
        }

        return filtered;
    }
);
