import { t } from '@/i18n/en'
import { toxicFoods } from '@/data/foods'
import { useSearch } from '@/hooks/useSearch'
import { SearchBar } from '@/components/SearchBar'
import { DangerFilter } from '@/components/DangerFilter'
import { ItemCard } from '@/components/ItemCard'

export function FoodsPage() {
  const { query, setQuery, filterLevel, setFilterLevel, results } = useSearch(toxicFoods)

  return (
    <div className="mx-auto max-w-lg px-4 py-4">
      {/* Search + filter */}
      <div className="mb-4 space-y-3">
        <SearchBar value={query} onChange={setQuery} />
        <DangerFilter value={filterLevel} onChange={setFilterLevel} />
      </div>

      {/* Count */}
      <p className="mb-3 text-xs text-amber-500 dark:text-amber-400">
        {t.foods.count(results.length)}
      </p>

      {/* List */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-amber-400 dark:text-amber-500">
          <span className="mb-2 text-4xl">🔍</span>
          <p className="text-sm">{t.search.noResults}</p>
        </div>
      ) : (
        <ul className="space-y-3" role="list">
          {results.map((food) => (
            <li key={food.id}>
              <ItemCard
                id={food.id}
                name={food.name}
                icon={food.icon}
                dangerLevel={food.dangerLevel}
                symptoms={food.symptoms}
                whatToDo={food.whatToDo}
                moreInfo={food.moreInfo}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
