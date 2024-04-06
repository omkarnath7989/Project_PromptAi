import Link from "next/link";

const Form = ({ type, post, setpost, handleSubmit, submitting }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => {
              setpost({ ...post, prompt: e.target.value });
            }}
            placeholder="Write your post here"
            required
            className="flex w-full h-[200px] rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span className="font-norma">(#webd , #AI)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setpost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#tag"
            required
            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
          />

          <div className="flex-end mx-3 mb-5 gap-4 mt-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              {submitting ? `${type}ing...` : type}
            </button>
          </div>
        </label>
      </form>
    </section>
  );
};

export default Form;