describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1920, 961)
    
       cy.visit('https://www.wingo.com/')

       cy.wait(5000)

       cy.get('[id^=inputOrigen]').focus().click({force: true})
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('[id^=comboOrigen]').invoke('show')
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('[id^=comboOrigen]').click({force: true})
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('[id^=inputOrigen]').invoke('show')
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('[id^=inputOrigen]').type('bogo')
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('.info-airport > .select > #comboOrigen > li > .textCity').click()
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('.input > .select-drop > .info-airport > .select > #inputDestino').click()
       cy.scrollTo('top') 
       cy.wait(1000)

       cy.get('.input > .select-drop > .info-airport > .select > #inputDestino').type('cali')
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('.info-airport > .select > #comboDestino > li > .textCity').click()
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('.inputs-row > .input > #selectPasj > .info-airport > .icon-chev').click()
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('.input > #selectPassenger > .passenger:nth-child(1) > .bts-add > .plus').click()
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('.inputs-row > .inputs-row > #inputOutboundDate > #btBalendarFrom > .info-airport').click()
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('#inputOutboundDate > .cont-calendar:nth-child(3) > .cont-months:nth-child(2) > .date-picker-wrapper:nth-child(1) > div:nth-child(1) .month-wrapper:nth-child(1) > .month2:nth-child(2) tr:nth-child(1) > td:nth-child(4) > .day:nth-child(1)').click()
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('#date-window-container > .date-picker-wrapper > div > div > .month-wrapper > .month2 > thead > .caption > th > .next').click()
       cy.scrollTo('top')
       cy.wait(1000)

       cy.get('#date-window-container > .date-picker-wrapper > div > div > .month-wrapper > .month2 > tbody > tr:nth-child(2) > td:nth-child(4) > .day').click()
       cy.scrollTo('top')
       cy.wait(1000)
    })
   
   })
   
   