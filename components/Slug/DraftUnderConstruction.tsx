import PageTitle from "@/components/Slug/PageTitle"

export default function DraftUnderConstruction() {
  return (
    <div className="mt-24 text-center">
      <PageTitle>
        Under Construction{" "}
        <span role="img" aria-label="roadwork sign">
          🚧
        </span>
      </PageTitle>
    </div>
  )
}
