<?php

namespace App\Service;

use PSX\Http\Exception as StatusCode;
use App\Model\Collection;
use App\Model\Survey as SurveyModel;

class Survey
{
    public function __construct()
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
            if (!isset($_SESSION["surveyResults"])) {
                $_SESSION["surveyResults"] = [];
            }
        }
    }

    /**
     * @param int $startIndex
     * @param int $count
     * @return \App\Model\Collection
     */
    public function getAll()
    {
        return new Collection(
            count($_SESSION["surveyResults"]),
            $_SESSION["surveyResults"]
        );
    }

    /**
     * @param \App\Model\Survey $model
     */
    public function create(SurveyModel $model)
    {
        array_push($_SESSION["surveyResults"], $model);
    }
}
