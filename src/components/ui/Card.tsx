import { ShareIcon } from "../../icons/ShareIcon";

interface CartProps {
  type: "twitter" | "youtube";
  link: string;
  title: string;
}

export const Card = (props: CartProps) => {
  return (
    <div className="bg-white p-4 rounded-md border-gray-200 max-w-72 border">
      <div className="flex justify-between text-md">
        <div className="flex items-center">
          <div className="mr-2">
            <ShareIcon size={"md"} />
          </div>
          { props.title }
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <a href={props.link} target="_blank">
            <ShareIcon size={"md"} />
            </a>
          </div>
          <div className="ml">
            <ShareIcon size={"md"} />
          </div>
        </div>
      </div>

      <div className="pt-4">
        {props.type === "youtube" &&<iframe
          className="w-full"
          // src="https://www.youtube.com/embed/PtPPWEgaWLg?si=m5zGfUjblD6ehRvD"
          src={props.link.replace("watch", "embeded")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>}

        {props.type === 'twitter' &&<blockquote className="twitter-tweet">
          <a 
            // href="https://twitter.com/username/status/807811447862468608"
            href={props.link.replace("x.com", "twitter.com")}
          ></a>
        </blockquote>}
      </div>
    </div>
  );
};
