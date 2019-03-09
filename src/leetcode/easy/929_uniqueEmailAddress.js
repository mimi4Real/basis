/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
	var res = [];
	for(var i = 0; i<emails.length;i++){
		var emailFormat = emails[i].split('@');
		if(emailFormat.length !== 2){
			return -1;
		}
		var email = emailFormat[0].replace(/\./g, '');
		var plusIndex = email.indexOf('+');
		if(plusIndex > -1){
			email = email.substring(0,plusIndex);
		}


		var realEmail = email + '@' + emailFormat[1]
		res.indexOf(realEmail) < 0 && res.push(realEmail);
	}
	return res.length;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))