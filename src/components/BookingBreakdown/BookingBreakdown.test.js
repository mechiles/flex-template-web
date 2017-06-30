import React from 'react';
import { fakeIntl } from '../../util/test-data';
import { renderDeep } from '../../util/test-helpers';
import { types } from '../../util/sdkLoader';
import { BookingBreakdownComponent } from './BookingBreakdown';

describe('BookingBreakdown', () => {
  it('pretransaction data matches snapshot', () => {
    const tree = renderDeep(
      <BookingBreakdownComponent
        bookingStart={new Date(Date.UTC(2017, 3, 14))}
        bookingEnd={new Date(Date.UTC(2017, 3, 16))}
        unitPrice={new types.Money(1000, 'USD')}
        totalPrice={new types.Money(2000, 'USD')}
        intl={fakeIntl}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('customer transaction data matches snapshot', () => {
    const tree = renderDeep(
      <BookingBreakdownComponent
        bookingStart={new Date(Date.UTC(2017, 3, 14))}
        bookingEnd={new Date(Date.UTC(2017, 3, 16))}
        unitPrice={new types.Money(1000, 'USD')}
        totalPrice={new types.Money(2000, 'USD')}
        intl={fakeIntl}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('provider transaction data matches snapshot', () => {
    const tree = renderDeep(
      <BookingBreakdownComponent
        bookingStart={new Date(Date.UTC(2017, 3, 14))}
        bookingEnd={new Date(Date.UTC(2017, 3, 16))}
        unitPrice={new types.Money(1000, 'USD')}
        totalPrice={new types.Money(1800, 'USD')}
        commission={new types.Money(200, 'USD')}
        intl={fakeIntl}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});