<?php

namespace App\Models\Passport;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\Client as PassportClient;

class Client extends PassportClient
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'oauth_clients';

    /**
     * Get the password grant client.
     *
     * @return mixed
     */
    public function getPasswordGrantClient()
    {
        return $this->findOrFail('916a9f2f-1416-4db2-bda2-88ec31c4ad05');
    }
}
