var delay = 2000;
describe('Common_TC_G_91', function(){
  it('Dang nhap', function(){
    cy.fixture('users').then((user) =>{
      cy.visit('/signin');
      cy.get('input[name=email]').type(user.doctor.email);
      cy.get('input[name=password]').type(user.doctor.password);
      cy.get('button[type=submit]').click();
      cy.wait(delay);
  	})
  })
  it('Vào trang quản lý bệnh nhân', function(){
  	cy.get('body > div > div.page-container.ng-scope > div > div.page-sidebar.navbar-collapse.collapse > ul > li:nth-child(7) > a').click()
  	cy.wait(delay)
  	cy.get('a.btn.blue-custom.btn-sm.ng-binding.ng-scope').contains('Thêm').click()
  	cy.wait(delay)
  	cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.col-md-8.padding-left-5 > div > form > div > div.portlet-body > div:nth-child(2) > div:nth-child(1) > div > div.ui-select-container.select2.select2-container.ng-not-empty.ng-valid.ng-valid-required').click()
  	cy.get('li').contains('Hà Nam').click().wait(1000)
  	cy.get('div[name=district_id').click()
  	cy.get('span').contains('Lý Nhân').click()
  	cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.col-md-8.padding-left-5 > div > form > div > div.portlet-body > div:nth-child(2) > div:nth-child(3) > div > div.ui-select-container.select2.select2-container.ng-empty.ng-invalid.ng-invalid-required').click()
  	cy.get('li').contains('Đạo Lý')
  	cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.col-md-8.padding-left-5 > div > form > div > div.portlet-body > div:nth-child(2) > div:nth-child(4) > div > input').type('Trúng Đích')
  	cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.col-md-8.padding-left-5 > div > form > div > div.portlet-body > div:nth-child(2) > div.col-xs-12.col-md-6 > div > input').type("cum 9")

  })
})

