<?php

namespace App\Api\Survey;

use PSX\Framework\Controller\SchemaApiAbstract;
use App\Model\Message;
use PSX\Http\Environment\HttpContextInterface;

/**
 * @Title("Survey")
 * @Description("and some more long description")
 * @PathParam(name="id", type="integer")
 */
class Entity extends SchemaApiAbstract
{
    /**
     * @Inject
     * @var \App\Service\Survey
     */
    protected $surveyService;

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
