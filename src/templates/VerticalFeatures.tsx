import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="WealthSnap"
    description="Most simple net worth tracker for humans by humans"
  >
    <VerticalFeatureRow
      title="Expense Manager"
      description="We include the most simple and optional expense tracker, unlike other app where you have to track app your expenses, we make it optional to keep track of your net worth easily."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Personalized Charts"
      description="We provide awesome charts so that you quickly glance at how your net worth is growing"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="No Signup Needed"
      description="Yes! your heard it right, sign up is optional, so you don't have to worry about your data and privacy. You can just download your data and launch this app with it later"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
