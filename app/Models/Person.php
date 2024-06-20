<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Person
 * @package App\Models
 * @author MARIANI Matthieu <devmattmar@gmail.com>
 */
class Person extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'lastname',
        'firstname',
        'file',
        'hash',
    ];
}
