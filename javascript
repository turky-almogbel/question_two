function handleSubmit(event) {
	event.preventDefault();

	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const organization = document.getElementById('organization').value;
	const email = document.getElementById('email').value;
	const workPhone = document.getElementById('work-phone').value;
	const homePhone = document.getElementById('home-phone').value;
	const cellPhone = document.getElementById('cell-phone').value;
	const fax = document.getElementById('fax').value;
	const address1 = document.getElementById('address-1').value;
	const address2 = document.getElementById('address-2').value;
	const city = document.getElementById('city').value;
	const stateProvince = document.getElementById('state-province').value;
	const zipPostalCode = document.getElementById('zip-postal-code').value;
	const country = document.getElementById('country').value;

	const message = `Congratulations ${firstName} ${lastName}, you are now signed up. Your details are: 
	1- ${firstName} ${lastName}
	2- ${organization}
	3- ${email}
	4- ${workPhone}
	5- ${homePhone}
	6- ${cellPhone}
	7- ${fax}
	8- ${address1}
	9- ${address2}
	10- ${city}
	11- ${stateProvince}
	12- ${zipPostalCode}
	13- ${country}`;

	document.getElementById('signup-message').textContent = message;
}
