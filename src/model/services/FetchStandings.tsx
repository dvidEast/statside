class FetchStandings{
    public async getStandings(): Promise<any> {
        try {
            const response = await fetch("https://api-web.nhle.com/v1/standings/now");
            // .ok is part of the response interface 
            //   - contains a Boolean stating whether the response was successful
            if(!response.ok) {
                throw new Error('Network response was not ok');
            } 
            const standings = await response.json();
            
            return standings;
        } catch (error) {
            console.error('Error fetching data:', error) 
            // throw error // rethrow error so caller can handle
        }
    }
}

export default FetchStandings