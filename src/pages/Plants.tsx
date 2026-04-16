import { t } from '@/i18n/en'
import { usePlantsData, formatTimeAgo } from '@/hooks/useSheetData'
import { useSearch } from '@/hooks/useSearch'
import { SearchBar } from '@/components/SearchBar'
import { DangerFilter } from '@/components/DangerFilter'
import { ItemCard } from '@/components/ItemCard'
import { SHEET_PUBLIC_URL } from '@/config'

export function PlantsPage() {
  const { plants, lastUpdated } = usePlantsData()
  const { query, setQuery, filterLevel, setFilterLevel, results } = useSearch(plants)

  return (
    <div className="mx-auto max-w-lg px-4 py-4">
      {/* Search + filter */}
      <div className="mb-4 space-y-3">
        <SearchBar value={query} onChange={setQuery} />
        <DangerFilter value={filterLevel} onChange={setFilterLevel} />
      </div>

      {/* Count + last updated */}
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs text-amber-500 dark:text-amber-400">
          {t.plants.count(results.length)}
        </p>
        {lastUpdated && (
          <p className="text-[10px] text-amber-300 dark:text-amber-600">
            Updated {formatTimeAgo(lastUpdated)}
          </p>
        )}
      </div>

      {/* List */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-amber-400 dark:text-amber-500">
          <span className="mb-2 text-4xl">🔍</span>
          <p className="text-sm">{t.search.noResults}</p>
        </div>
      ) : (
        <ul className="space-y-3" role="list">
          {results.map((plant) => (
            <li key={plant.id}>
              <ItemCard
                id={plant.id}
                name={plant.name}
                icon={plant.icon}
                dangerLevel={plant.dangerLevel}
                symptoms={plant.symptoms}
                whatToDo={plant.whatToDo}
                moreInfo={plant.moreInfo}
                toxicParts={plant.toxicParts}
                scientificName={plant.scientificName}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Contribute FAB */}
      <a
        href={SHEET_PUBLIC_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Add a food or plant to help other dogs 🐾"
        aria-label="Contribute — add a plant to help other dogs"
        className="fixed bottom-24 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-paw-cream/95 text-amber-400 shadow-md backdrop-blur-sm transition-all hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600 hover:shadow-lg dark:border-paw-dark-border dark:bg-paw-dark-card/95 dark:text-amber-500 dark:hover:border-amber-600 dark:hover:text-amber-300"
      >
        <span className="text-base leading-none">✏️</span>
      </a>
    </div>
  )
}
