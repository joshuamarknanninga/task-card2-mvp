
# Task Card Kanban Board MVP

This project is a simple, fully functional Kanban board built using HTML, CSS, and JavaScript. It allows users to create, edit, delete, and move task cards between three columns: **To Do**, **In Progress**, and **Done**. The project stores tasks in the browser's local storage to maintain state across page reloads.

## Features

- **Task Creation:** Add new task cards to the **To Do**, **In Progress**, or **Done** columns.
- **Task Editing:** Edit the title and description of any existing task.
- **Task Deletion:** Delete tasks directly from the UI (when tasks are edited and the user clears the fields).
- **Drag and Drop:** Move tasks between columns using drag-and-drop functionality.
- **Color-Coded Tasks:** Automatically change the background color of task cards based on their column:
  - **To Do:** White
  - **In Progress:** Green
  - **Done:** Red
- **Data Persistence:** Uses browser's local storage to save tasks, allowing users to refresh the page without losing their data.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/joshuamarknanninga/task-card-mvp.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd task-card-mvp-main
   ```

3. **Open the Project:**  
   Simply open `index.html` in a web browser to use the Kanban board.

## Usage

- **Add a Task:**  
  Click the "Add Task" button in any column to create a new task. Enter the task's title and description, then click "Save."

- **Edit a Task:**  
  Click on any task card to edit its title and description. Save the changes to update the task.

- **Move Tasks:**  
  Drag and drop task cards between columns (**To Do**, **In Progress**, and **Done**).

- **Delete a Task:**  
  Edit the task and clear the title and description fields. Then click "Save" to remove it.

- **Change Task Status:**  
  When you move a task card to a new column, its color changes automatically:
  - **To Do:** White
  - **In Progress:** Green
  - **Done:** Red

## Code Explanation

1. **`index.html`**
   - The main HTML file sets up the structure of the Kanban board.
   - Contains three columns (**To Do**, **In Progress**, and **Done**), each with a button to add tasks and a container to hold task cards.
   - Includes a modal for creating and editing tasks.
   - Loads the `styles.css` for styling and `script.js` for the functionality.

2. **`styles.css`**
   - Provides the styling for the Kanban board, columns, task cards, and modal.
   - Defines styles for color-coded task cards based on their column status.

3. **`script.js`**
   - Handles the core logic of the Kanban board:
     - **Task Creation:** Opens a modal to enter task details, saves the task to local storage, and updates the UI.
     - **Task Editing:** Allows editing the details of an existing task.
     - **Drag and Drop:** Implements drag-and-drop functionality to move tasks between columns and updates the task status in local storage.
     - **Color Coding:** Changes the color of task cards based on their status (**To Do**, **In Progress**, **Done**).

## Customization

- **Change Column Names:**  
  Modify the column names by editing the `<h2>` tags in `index.html`.

- **Add More Columns:**  
  Add more columns by duplicating a column block in `index.html` and modifying `script.js` to handle the new column.

- **Styling:**  
  Modify `styles.css` to change the appearance of the board, cards, or modal.

## Known Issues & Limitations

- The board currently uses browser local storage, so tasks are not shared across devices or sessions.
- There is no explicit delete button for tasks. Deleting a task involves editing it and clearing the fields.
- No real-time synchronization if multiple users access the Kanban board simultaneously.

## Future Enhancements

- **User Authentication:** Implement user login to store tasks on a server.
- **Remote Storage:** Use a database (e.g., Firebase, MongoDB) to store tasks for cross-device access.
- **Real-Time Collaboration:** Enable multiple users to interact with the Kanban board in real-time.
- **Archive Completed Tasks:** Add functionality to archive or delete tasks from the **Done** column.

## Browser Compatibility

The project has been tested on the latest versions of:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or suggestions, please contact the project maintainer at [jmarknanninga@gmail.com](mailto:jmarknanninga@gmail.com).

## How to Contribute

1. **Fork the repository.**
2. **Create a new branch:**  
   ```bash
   git checkout -b feature-branch
   ```
3. **Commit your changes:**  
   ```bash
   git commit -am 'Add new feature'
   ```
4. **Push to the branch:**  
   ```bash
   git push origin feature-branch
   ```
5. **Create a new Pull Request.**
```