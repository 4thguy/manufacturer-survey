<?php

namespace App\Model;

/**
 * @Title("collection")
 * @Description("Collection result")
 */
class Collection
{
    /**
     * @Type("integer")
     */
    protected $totalResults;

    /**
     * @Type("array")
     * @Items(@Ref("App\Model\Survey"))
     */
    protected $entry;

    public function __construct($totalResults = null, array $entry = null)
    {
        $this->totalResults = $totalResults;
        $this->entry = $entry;
    }

    public function getTotalResults()
    {
        return $this->totalResults;
    }

    public function setTotalResults($totalResults)
    {
        $this->totalResults = $totalResults;
    }

    public function getEntry()
    {
        return $this->entry;
    }

    public function setEntry($entry)
    {
        $this->entry = $entry;
    }
}
