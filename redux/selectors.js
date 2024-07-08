import { createSelector } from 'reselect';

export const selectAdverts = state => state.adverts.items;

export const selectAdvertsLoading = state => state.adverts.loading;

export const selectFavoriteLoading = state => state.favorite.loading;

export const selectFilters = state => state.filters;

export const selectAdvertsPage = state => state.adverts.page;

export const selectFavoritePage = state => state.favorite.page;

export const selectAdvertsHasMore = state => state.adverts.hasMore;

export const selectFavoriteHasMore = state => state.favorite.hasMore;

export const selectFavorite = state => state.favorite.items;

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
        if (filters.isFavorite) {
            filtered = filtered.filter(advert => advert.isFavorite !== false)
        }

        return filtered;
    }
);

export const selectFilteredFavorite = createSelector(
    [selectFavorite, selectFilters],
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
        if (filters.isFavorite) {
            filtered = filtered.filter(advert => advert.isFavorite !== false)
        }

        return filtered;
    }
);