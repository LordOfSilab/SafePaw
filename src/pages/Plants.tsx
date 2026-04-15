import { t } from '@/i18n/en'
import { toxicPlants } from '@/data/plants'
import { useSearch } from '@/hooks/useSearch'
import { SearchBar } from '@/components/SearchBar'
import { DangerFilter } from '@/components/DangerFilter'
import { ItemCard } from '@/components/ItemCard'

export function PlantsPage() {
  const { query, setQuery, filterLevel, setFilterLevel, results } = useSearch(toxicPlants)

  return (
    <div className="mx-auto max-w-lg px-4 py-4">
      {/* Search + filter */}
      <div className="mb-4 space-y-3">
        <SearchBar value={query} onChange={setQuery} />
        <DangerFilter value={filterLevel} onChange={setFilterLevel} />
      </div>

      {/* Count */}
      <p className="mb-3 text-xs text-amber-500 dark:text-amber-400">
        {t.plants.count(results.length)}
      </p>

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
    </div>
  )
}
