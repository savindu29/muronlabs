import { div } from "motion/react-client";

interface TopicProps {
  mainTopic: string;
  subTopic: string;
}

// Functional component accepting props typed as TopicProps
export default function Topic(topicProps: TopicProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-xl font-medium text-indigo-500 text-center lg:text-left">
        {topicProps.mainTopic}
      </div>
      <div className="text-3xl font-medium text-stone-700 text-center lg:text-left">
        {topicProps.subTopic}
      </div>
    </div>
  );
}
