import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import { WeatherData } from '../types/WeatherData';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}


interface WeatherCardProps {
  weatherData: WeatherData | null;
}

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  return (
    <Card className="w-1/2 mt-20  bg-black/75 text-white  mx-auto p-15">
      <CardContent>
        <div className="text-xl font-bold text-center m-3">Weather in {weatherData?.location}</div>
       
        <div className="flex justify-between items-center mt-6"> 
        <div> Temperature:🌡️{weatherData?.temperature}°C</div>
        {/* <div>{weatherData?.description}</div> */}
        <div>Humidity:🌊 {weatherData?.humidity}%</div>
        <div>Wind Speed:🌬️ {weatherData?.windSpeed} m/s</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Get 5-day Forecast</Button>
      </CardFooter>
    </Card>
  );
};

export default WeatherCard;