import MultiDayHero from "./MultiDayHero";
import MultiDayWhy from "./MultiDayWhy";
import MultiDayPackages from "./MultiDayPackages";
import MultiDayVehicleSelector from "./MultiDayVehicleSelector";
import MultiDayHowItWorks from "./MultiDayHowItWorks";
import MultiDayTestimonials from "./MultiDayTestimonials";
import MultiDayFaq from "./MultiDayFaq";
import MultiDayEnquiry from "./MultiDayEnquiry";

type Vehicle = {
  title: string;
  slug?: string;
  description: string;
  image: string;
  seats?: number;
};

type Props = {
  vehicles?: Vehicle[];
};

export default function MultiDayPage({ vehicles = [] }: Props) {
  return (
    <>
      <MultiDayHero />
      <MultiDayWhy />
      <MultiDayPackages />
      <MultiDayHowItWorks />
      <MultiDayVehicleSelector vehicles={vehicles} />
      <MultiDayFaq />
      <MultiDayTestimonials />
      <MultiDayEnquiry />
    </>
  );
}
