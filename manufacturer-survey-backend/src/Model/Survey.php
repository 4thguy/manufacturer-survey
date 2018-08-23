<?php

namespace App\Model;

/**
 * @Title("survey")
 * @Description("Represents an internet survey entity")
 * @Required({})
 */
class Survey
{
    /**
     * @Type("integer")
     * @Description("Unique id for each entry")
     */
    protected $id;

    /**
     * @Type("integer")
     * @Minimum(0)
     * @Maximum(100)
     * @Description("Age")
     */
    protected $age;

    /**
     * @Type("integer")
     * @Minimum(-1)
     * @Maximum(2)
     */
    protected $gender;

    /**
     * @Type("number")
     * @Minimum(-1)
     * @Maximum(1)
     */
    protected $haveLicense;

    /**
     * @Type("number")
     * @Minimum(-1)
     * @Maximum(1)
     */
    protected $firstCar;

    /**
     * @Type("integer")
     * @Minimum(-1)
     * @Maximum(2)
     */
    protected $driveTrain;

    /**
     * @Type("number")
     * @Minimum(-1)
     * @Maximum(1)
     */
    protected $drifting;

    /**
     * @Type("integer")
     * @Minimum(0)
     */
    protected $bmwsDriven;

    /**
     * @Type("string")
     */
    protected $bmwsWhichDriven;

    public function getId()
    {
        return $this->id;
    }
    public function setId($id)
    {
        $this->id = $id;
    }

    public function getAge()
    {
        return $this->age;
    }
    public function setAge($age)
    {
        $this->age = $age;
    }

    public function getGender()
    {
        return $this->gender;
    }
    public function setGender($gender)
    {
        $this->gender = $gender;
    }

    public function getHaveLicense()
    {
        return $this->haveLicense;
    }
    public function setHaveLicense($haveLicense)
    {
        $this->haveLicense = $haveLicense;
    }

    public function getFirstCar()
    {
        return $this->firstCar;
    }
    public function setFirstCar($firstCar)
    {
        $this->firstCar = $firstCar;
    }

    public function getDriveTrain()
    {
        return $this->driveTrain;
    }
    public function setDriveTrain($driveTrain)
    {
        $this->driveTrain = $driveTrain;
    }

    public function getDrifting()
    {
        return $this->drifting;
    }
    public function setDrifting($drifting)
    {
        $this->drifting = $drifting;
    }

    public function getBmwsDriven()
    {
        return $this->bmwsDriven;
    }
    public function setBmwsDriven($bmwsDriven)
    {
        $this->bmwsDriven = $bmwsDriven;
    }

    public function getBmwsWhichDriven()
    {
        return $this->bmwsWhichDriven;
    }
    public function setBmwsWhichDriven($bmwsWhichDriven)
    {
        $this->bmwsWhichDriven = $bmwsWhichDriven;
    }

}
