<?php

namespace App\Api\Survey;

use PSX\Framework\Controller\SchemaApiAbstract;
use App\Model\Message;
use PSX\Http\Environment\HttpContextInterface;

class Collection extends SchemaApiAbstract
{
    /**
     * @Inject
     * @var \App\Service\Survey
     */
    protected $surveyService;

    /**
     * @Outgoing(code=200, schema="App\Model\Collection")
     * @return \App\Model\Collection
     */
    protected function doGet(HttpContextInterface $context)
    {
        return $this->surveyService->getAll();
    }
    
    /**
     * @Incoming(schema="App\Model\Survey")
     * @Outgoing(code=201, schema="App\Model\Message")
     * @param \App\Model\Survey $record
     * @return \App\Model\Message
     */
    protected function doPost($record, HttpContextInterface $context)
    {
        $this->surveyService->create($record);

        return new Message(true, 'Create survey successful');
    }
}
