import { NgxDatatableTestPage } from './app.po';

describe('ngx-datatable-test App', () => {
  let page: NgxDatatableTestPage;

  beforeEach(() => {
    page = new NgxDatatableTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
