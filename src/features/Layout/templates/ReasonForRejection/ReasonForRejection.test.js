import React from 'react';
import { mount } from 'enzyme';
import ReasonForRejection from './index';
import TestProvider from 'test/TestProvider';
import store from 'app';
import runAsyncRender from 'test/utils/runAsyncRender';

const props = {
  data: [
    {
      color: '2',
      percent: '26',
      heading: 'Feasibility',
      data: '- Business model is unclear or untenable',
    },
  ],
};

describe('Report', () => {
  describe('default render', () => {
    it('should render with classes', async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ReasonForRejection {...props} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find('.percent').text()).toEqual(props.data[0].percent + '%');
      expect(wrapper.find('.heading').text()).toEqual(props.data[0].heading);
    });
  });
});
