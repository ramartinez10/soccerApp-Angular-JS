describe('Factory Test',function(){

    var soccerApi;

    beforeEach(angular.mock.module('soccerApp'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_soccerApi_) {
    soccerApi = _soccerApi_;
    }));


    // A simple test to verify the Users factory exists
    it('the factory should exist', function() {
    expect(soccerApi).toBeDefined();
    });

    // group of test for getLeagues method
    describe('getLeagues method test',function(){

        leaguesList=['premiere','league one','serie a'];

        it('the method getLeagues should exist',function(){
            expect(soccerApi.getLeagues).toBeDefined();
        })
        
        it('should return a list of soccer leagues',function(){
            expect(soccerApi.getLeaguesList()).toEqual(leaguesList);
        })



    })


})

describe('filterTest',function(){

    beforeEach(angular.mock.module('customFilters'));
    
    var $filter;

    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
      }));

    it('should separete letters by ->',function(){
        var foo = 'hello', result;
        result = $filter('countryKeyFormat')(foo);

        expect(result).toBeDefined('h➡e➡l➡l➡o');
    })
})