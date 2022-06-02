let URL;
if (process.env.NODE_ENV === "development") {
	URL = "http://localhost:3500/api/v1"; //for development
} else {
	//  URL = "https://justdoit.anhonestobserver.com/api/"; //for production if in aws or gcp
	URL = "/api/v1"; //for production in heroku
}

export default URL;
