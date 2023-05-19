public class accountDataTableController {

    @AuraEnabled
    public static List<Account> accountDataTableController() {
        return [Select Id,Type,Phone,Name,AccountNumber from Account];
    }
}