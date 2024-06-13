<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class PersonController
 * @package App\Http\Controllers
 * @author MARIANI Matthieu <devmattmar@gmail.com>
 */
class PersonController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Person::all());
    }

    /**
     * store a person
     * @param Request $request
     * @return JsonResponse
     * @author MARIANI Matthieu <devmattmar@gmail.com>
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);


        if ($validated) {
            Person::create([
                'name' => $validated['name'],
            ]);

            return response()->json(['success' => 'Successfully created!']);

        } else {
            return response()->json(['error' => 'Error during creation']);
        }
    }

    /**
     * edit a person
     * @param Request $request
     * @param Person $person
     * @return JsonResponse
     * @author MARIANI Matthieu <devmattmar@gmail.com>
     */
    public function edit(Request $request, Person $person): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        if ($validated) {

            $person->update([
                'name' => $validated['name'],
            ]);

            return response()->json(['success' => 'Successfully edited!']);

        } else {
            return response()->json(['error' => 'Error during edition']);
        }
    }

    /**
     * delete a person
     * @param Person $person
     * @return JsonResponse
     * @author MARIANI Matthieu <devmattmar@gmail.com>
     */
    public function destroy(Person $person): JsonResponse
    {
        $person->delete();
        return response()->json(['success' => 'Successfully deleted!']);
    }
}
