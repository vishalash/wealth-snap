import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="The Ultimate Net Worth Tracker for Easy Financial Management"
    description="Track your net worth with ease and precision using WealthSnap - the app designed by humans, for humans."
  >
    <VerticalFeatureRow
      title="Simplify Your Expenses"
      description="We understand that tracking every expense can be cumbersome, that's why we provide an optional expense tracker, so you can effortlessly keep track of your net worth."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Customized Charts for Better Visualization"
      description="WealthSnap provides personalized charts that allow you to quickly monitor how your net worth is growing, so you can make informed decisions."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="No Signup Required, Ever"
      description="Worried about your data privacy? Don't be. With WealthSnap, you don't have to sign up to use our app. Simply download your data and launch the app with it whenever you need it."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
