/* eslint-disable no-console */
import EditListingFilesForm from './EditListingFilesForm';

export const Empty = {
  component: EditListingFilesForm,
  props: {
    onSubmit: values => {
      console.log('Submit EditListingFilesForm with values:', values);
    },
    saveActionMsg: 'Next',
    updated: false,
    updateInProgress: false,
    disabled: false,
    ready: false,
  },
  group: 'page:EditListingPage',
};
