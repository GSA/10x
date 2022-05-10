import React from 'react';
import { mount } from 'enzyme';
import Report from './index';
import TestProvider from 'test/TestProvider';
import store from 'app';
import runAsyncRender from 'test/utils/runAsyncRender';
import { Route } from 'react-router-dom';
//import Links from "./Links";
//import Nav from "./Nav";

describe('Report', () => {
  describe('default render', () => {
    it('should render', async () => {
      const wrapper = mount(
        <TestProvider store={store} route={['/reports/test']}>
          <Route path="/reports/:name" component={Report} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find('h1').first().text()).toBe(
        'test 1'
      );
    });
    /* it("should render error on incorrect path name", async () => {
      const wrapper = mount(
        <TestProvider store={store} route={["/reports/error"]}>
          <Route path="/reports/:name" component={Report} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".Tx__FourOhFour").length).toBe(1);
    }); */
  });
});

